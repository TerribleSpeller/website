import React from "react";
import Link from 'next/link'

function bureaucracyMain() {
    return (
        <div className="container">
            <div className="col-lg">
                <div className="col">
                    <div className="row mb-3">
                        <div className="col mx-auto mx-3 px-3">
                            <h1 className="h1-title"><u>Bureacuracy Manifest</u></h1> {/* Apply the class directly to <h1> */}
                        </div>
                        <br />
                        <br />
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="mx-5" style={{ "max-width": "40vw" }}>
                            <div className="card p-1 border-2 border-black bg-dark-subtle">
                                <div className="container p-2">
                                    <div id="top-data" className="m-1">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <th style={{ "text-align": "right" }}>
                                                        From:
                                                    </th>
                                                    <td>
                                                        AlekiesihJingsu@Lipas.mle.int
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th style={{ "text-align": "right" }}>
                                                        To:
                                                    </th>
                                                    <td>
                                                        Lipas (Group)
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th style={{ "text-align": "right" }}>
                                                        Subject:
                                                    </th>
                                                    <td>
                                                        2385 - 2395 Decade Review
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th style={{ "text-align": "right" }}>
                                                        Date:
                                                    </th>
                                                    <td>
                                                        2396 Apr 4th - 02:43 AM
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <hr/>
                                    <div className="message-content">
                                        
                                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

                                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

                                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default bureaucracyMain;