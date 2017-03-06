import React from 'react';
import { connect } from 'react-redux';
import { sales } from '../actions/sales.js';

class SalesDesk extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState() {
        return {
            deal: {
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
                    <h4>Available Items: </h4>
                    {
                        this.props.finishedProducts.inventory.map(item => {
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
                    <h3>Sales Desk</h3>
                    <form onSubmit={this.deal}>
                        <label>Deal : </label>
                        <input
                            placeholder='Quantity'
                            className='form-control'
                            value={this.state.deal.table}
                            onChange={(event) => this.dealChange('table', event.target.value)}
                            ref={node => this.steelEle = node}
                        />
                        <br/>
                        <br/>
                        <button
                            type='submit'
                            className='btn btn-primary'
                        >
                        Sale
                        </button>
                    </form>
                </div>
            </div>
        )
    }

    dealChange(itemName, value) {
        let deal = {
            ...this.state.deal,
            [itemName]: +value
        };
        this.setState({
            deal: deal
        });
    }

    getTotalCost(deal) {
        let totalCost = 0;
        for (let itemName in deal) {
            const itemCatelogue = this.props.finishedProducts.catelogue.find(item => item.name === itemName);
            totalCost += itemCatelogue ? itemCatelogue.price * deal[itemName] : 0;
        }
        return totalCost;
    }

    deal = (event) => {
        event.preventDefault();
        this.props.sales(this.state.deal,
            this.getTotalCost(this.state.deal)
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        availableAmount: state.finance.availableAmount,
        finishedProducts: state.finishedProducts
    }
}

export default connect(
    mapStateToProps,
    { sales }
)(SalesDesk);
