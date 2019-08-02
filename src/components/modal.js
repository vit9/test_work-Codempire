import React, { Component } from "react";
import { Modal } from "antd";

export default class EditModal extends Component {
	render() {
        
		const { visible, onOk, onCancel, name} = this.props;
		  return (
			<Modal title="Хорошего настроения" visible={visible} onCancel={onCancel} onOk={onOk}  >
					<h4>Вы выбрали - {name}</h4>
			</Modal>
		  );
	}
}
