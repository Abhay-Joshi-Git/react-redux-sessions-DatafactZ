import React from 'react';
import { connect } from 'react-redux';
import { produce } from '../actions/production.js';

class ProductionFloor extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState() {
        return {
            produce: {
                table: 0
            }
        }
    }

    render() {
        return (
            <div>
                <div>
                    <h4>Available Amount : {this.props.availableAmount}</h4>
                </div>
                <br/>
                <div>
                    <h4>Available Raw Items: </h4>
                    {
                        this.props.rawMaterials.inventory.map(item => {
                            return (
                                <div
                                    className='well well-sm'
                                    key={item.name}
                                >
                                    {item.name} - {item.availableAmount}
                                </div>
                            )
                        })
                    }
                </div>

                <div className='well'>
                    <h3>Production Floor</h3>
                    <form onSubmit={this.produce}>
                        <label>Table : </label>
                        <input
                            placeholder='Quantity'
                            className='form-control'
                            value={this.state.produce.steel}
                            onChange={(event) => this.produceChange('table', event.target.value)}
                            ref={node => this.steelEle = node}
                        />
                        <br/>
                        <br/>
                        <button
                            type='submit'
                            className='btn btn-primary'
                        >
                        Produce
                        </button>
                    </form>

                </div>

            </div>
        )
    }

    produceChange(itemName, value) {
        console.log(itemName, value);
        let produce = {
            ...this.state.produce,
            [itemName]: +value
        };
        this.setState({
            produce: produce
        });
    }

    getTotalCost(produce) {
        let totalCost = 0;
        for (let itemName in produce) {
            const itemCatelogue = this.props.finishedProducts.catelogue.find(item => item.name === itemName);
            totalCost += itemCatelogue ? itemCatelogue.productionCost * produce[itemName] : 0;
        }
        return totalCost;
    }

    getRawMaterialReq(produce) {
        let rawMaterials = {};
        for (let itemName in produce) {
            const itemCatelogue = this.props.finishedProducts.catelogue.find(item => item.name === itemName);
            rawMaterials = itemCatelogue.rawItemsReq.reduce((acc, val) => {
                console.log(acc, val, produce[itemName])
                return {
                    ...acc,
                    [val.name]: (val.qty * produce[itemName]) +
                     (acc[val.name] ? acc[val.name] : 0)
                }
            }, rawMaterials)
        }
        return rawMaterials;
    }

    produce = (event) => {
        event.preventDefault();
        this.props.produce(this.state.produce,
            this.getRawMaterialReq(this.state.produce),
            this.getTotalCost(this.state.produce)
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        availableAmount: state.finance.availableAmount,
        rawMaterials: state.rawMaterials,
        finishedProducts: state.finishedProducts
    }
}

export default connect(
    mapStateToProps,
    { produce }
)(ProductionFloor);
