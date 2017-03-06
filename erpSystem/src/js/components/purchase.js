import React from 'react';
import { connect } from 'react-redux';
import { purchase } from '../actions/purchase.js';

class PurchaseFloor extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState() {
        return {
            purchase: {
                steel: 0,
                glass: 0
            },
            canPurchase: false
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            canPurchase: this.canPurchase(this.state.purchase, nextProps.availableAmount)
        });
    }

    render() {
        return (
            <div>
                <div>
                    <h4>Available Amount : {this.props.availableAmount}</h4>
                </div>


                <div className='well'>
                    <h3>Purchase Desk</h3>
                        <form onSubmit={this.purchase}>
                            <label>Steel : </label>
                            <input
                                placeholder='Quantity'
                                className='form-control'
                                value={this.state.purchase.steel}
                                onChange={(event) => this.purchaseChange('steel', event.target.value)}
                                ref={node => this.steelEle = node}
                            />
                            <br/>
                            <br/>
                            <label>Glass Sheets : </label>
                            <input
                                placeholder='Quantity'
                                className='form-control'
                                value={this.state.purchase.glass}
                                onChange={(event) => this.purchaseChange('glass', event.target.value)}
                                ref={node => this.glassEle = node}
                            />
                            <br/>
                            <br/>
                            <button
                                type='submit'
                                className='btn btn-primary'
                                disabled={!this.state.canPurchase}
                            >
                            Purchase
                            </button>
                        </form>                
                </div>
            </div>
        )
    }

    purchaseChange(itemName, value) {
        let purchase = {
            ...this.state.purchase,
            [itemName]: +value
        };
        this.setState({
            purchase: purchase,
            canPurchase: this.canPurchase(purchase, this.props.availableAmount)
        });
    }

    getRawMaterialTotalCost(purchase) {
        let totalCost = 0;
        for (let itemName in purchase) {
            const rawItemCatelogue = this.props.rawMaterials.catelogue.find(item => item.name === itemName);
            totalCost += rawItemCatelogue ? rawItemCatelogue.cost * purchase[itemName] : 0;
        }
        return totalCost;
    }

    canPurchase(purchase, amount) {
        let totalQty = 0;
        for (let itemName in purchase) {
            totalQty += purchase[itemName]
        }
        return (this.getRawMaterialTotalCost(purchase) <= amount) &&
            totalQty
    }

    purchase = (event) => {
        event.preventDefault();
        this.props.purchase(this.state.purchase, this.getRawMaterialTotalCost(this.state.purchase));
    }
}

const mapStateToProps = (state) => {
    return {
        availableAmount: state.finance.availableAmount,
        rawMaterials: state.rawMaterials
    }
}

export default connect(
    mapStateToProps,
    { purchase }
)(PurchaseFloor);
