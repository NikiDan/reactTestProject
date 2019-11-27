import React, { Fragment } from 'react'
import Button from "../../components/Button";
import '../../styles/redux.css';

class ReduxPage extends React.Component {
    state = {
        ip: '',
        label: '',
        id: '',
    };

    constructor(props) {
        super(props);
        this.lastID = 0;
    }

    handleInputLabel = (e) => this.setState({label: e.target.value})
    handleInputIp = (e) => this.setState({ip: e.target.value})

    handleAddIp = () => {
        this.props.addIp({
            ip: this.state.ip,
            label: this.state.label,
            id: this.lastID++
        })
    }

    handleClick = (e) => {
        // e = e;
        let eventEl = e.srcElement || e.target,
            parent = eventEl.parentNode,
        isRow = function (el) {
                        return el.tagName.match(/tr/i);
            };
            //     move up the DOM until tr is reached
            while (parent = parent.parentNode) {
                if (isRow(parent)) {
                    //row found, row delete with it and return, e.g.
                    parent.remove();
                    // delete.parent;
                    return true;
                }
            }
        }

        render(){
            return (

                <Fragment>

                  <div className="content">
                    <h1 className="title">Redux</h1>

                    <Fragment>
                      <h2 className="title">Add new IP address</h2>
                      <Fragment>
                        <div>
                          <p><b className="text">IP address</b></p>
                          <input type='text'
                                 value={this.state.ip}
                                 className="input-style"
                                 onChange={this.handleInputIp}/>
                        </div>
                        <div>
                          <p><b className="text">Label</b></p>
                          <input type='text' value={this.state.label} onChange={this.handleInputLabel}
                                 className="input-style"/>
                        </div>
                        <p className="button-place">
                          <Button
                              type='primary'
                              onClick={this.handleAddIp}
                              className="button"
                          >
                            Add
                          </Button>
                        </p>
                      </Fragment>
                    </Fragment>
                    <Fragment>
                      <div>
                        <p className="text-data"><b className="text">This is your data</b></p>
                        <table>
                          <tr>
                            <th>ID</th>
                            <th>LABEL</th>
                            <th>IP</th>
                            <th>DELETE</th>
                          </tr>
                            {this.props.ips.list.map((el) =>
                                (<tr key={el.id} onClick={(e) => this.handleClick(e)}>
                                  <td>{el.id}</td>
                                  <td>{el.label}</td>
                                  <td>{el.ip}</td>
                                  <td><a className="linkDelete">X</a></td>
                                </tr>))}
                          <tr>
                          </tr>
                        </table>
                      </div>
                    </Fragment>
                  </div>

                </Fragment>
            )
        }
    }
export default ReduxPage
