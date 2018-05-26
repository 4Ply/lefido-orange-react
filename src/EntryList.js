import React, {Component} from 'react';
import './EntryList.css';
import DateUtil from "./utils/DateUtil";


class EntryList extends Component {
    render() {
        return (
            <div className="EntryList">
                <table>
                    <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Gymnast ID</th>
                        <th>First Name</th>
                        <th>Surname</th>
                        <th>Age (EOY)</th>
                    </tr>

                    {
                        (this.props.entries || [])
                            .map((entry) =>
                                <tr key={entry.id}>
                                    <td>
                                        <a href={"/entry/" + entry.id}>
                                            {entry.id}
                                        </a>
                                    </td>
                                    <td>
                                        <a target="_blank"
                                           href={"https://blue.lefido.co.za/gymnast_info.php?id=" + entry.gymnast_id}>
                                            {entry.gymnast_id}
                                        </a>
                                    </td>
                                    <td>{entry.firstName}</td>
                                    <td>{entry.surname}</td>
                                    <td>{DateUtil.calculateAgeAtTheEndOfThisYear(entry.dateOfBirth) || "unknown"}</td>
                                </tr>)
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default EntryList
