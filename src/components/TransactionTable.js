const TransactionTable=(props)=>{
    return(
        <>
        <div className="table-container">
            <h3 className="table-title">Active Deposits</h3>
            <p className="transaction-no">2</p>
            <button type="button" className="add-btn">+</button>

            <table width="80%">
            <thead>
                <tr>
                    
                    <th>participents</th>
                    <th>MOVE IN DATE</th>
                    <th>RENT</th>
                    <th>DEPOSIT</th>
                    <th>STATUS
                       
                    </th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>771 Lost Round</td>
                        <td>23 February 2020</td>
                        <td>$3000</td>
                        <td>$9000</td>
                        <td>Awating Bank Processing</td>
                    </tr>
                    <tr>
                        <td>771 Lost Round</td>
                        <td>23 February 2020</td>
                        <td>$3000</td>
                        <td>$9000</td>
                        <td>Awating Bank Processing</td>
                    </tr>
                </tbody>
            </table>

            <div  className="active-btn"><button type="button">All Active Deposite</button></div>
            
        </div>
        
        <div className="table-container">
            <h3 className="table-title">Active Deposits</h3>
            <p className="transaction-no">2</p>
            <button type="button" className="add-btn">+</button>

            <table width="80%">
            <thead>
                <tr>
                    
                    <th>participents</th>
                    <th>MOVE IN DATE</th>
                    <th>RENT</th>
                    <th>DEPOSIT</th>
                    <th>STATUS
                       
                    </th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>771 Lost Round</td>
                        <td>23 February 2020</td>
                        <td>$3000</td>
                        <td>$9000</td>
                        <td>Awating Bank Processing</td>
                    </tr>
                    <tr>
                        <td>771 Lost Round</td>
                        <td>23 February 2020</td>
                        <td>$3000</td>
                        <td>$9000</td>
                        <td>Awating Bank Processing</td>
                    </tr>
                </tbody>
            </table>

            <div  className="active-btn"><button type="button">Closed Deposite</button></div>
        </div>
        </>
    )
}
export default TransactionTable;