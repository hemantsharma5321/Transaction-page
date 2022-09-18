const TransactionTable=(props)=>{
    return(
        <div className="table-container">
            <h3 className="table-title">Active Deposits</h3>
            <span className="transaction-no">2</span>
            <button type="button" className="add-btn">+</button>

            <table>
                <thead>
                <tr>
                    <th>participents</th>
                    <th>MOVE IN DATE</th>
                    <th>RENT</th>
                    <th>DEPOSIT</th>
                    <th>STATUS
                        <span className="status-color"></span>
                    </th>
                </tr>
             </thead>
            </table>
        </div>
    )
}
export default TransactionTable;
