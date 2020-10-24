WebForms = {
	Page: function (properties) {
		this.Properties = properties;
		this.Controls = [];
	},
	Panel: function (properties) {
		this.Properties = properties;
		this.Controls = [];
	},
	Label: function (properties) {
		this.Properties = properties;
		this.Controls = [];
	},
	TextBox: function (properties) {
		this.Properties = properties;
		this.Controls = [];
	},
	TextArea: function (properties) {
		this.Properties = properties;
		this.Controls = [];
	},
	Button: function (properties) {
		this.Properties = properties;
		this.Controls = [];
	}
};

WebForms.Page.prototype = {
	Update: function (element, document) {
		element.title = this.Properties.Title;

		if (this.Panel == null) {
			this.Panel = document.createElement("div");
			element.body.appendChild(this.Panel);
		}

		while (this.Controls.length > this.Panel.children.length) {
			this.Panel.appendChild(this.Controls[this.Panel.children.length].Create(document));
		}

		if (this.Controls.length < this.Panel.children.length) {
			element.children.length = this.Controls.length;
		}

		for (var control = 0; control < this.Controls.length; control++)
			this.Controls[control].Update(this.Panel.children[control], document);
	}
};

WebForms.Panel.prototype = {
	Create: function (document) {
		return document.createElement("div");
	},
	Update: function (element, document) {

	}
};

WebForms.Label.prototype = {
	Create: function (document) {
		return document.createElement("span");
	},
	Update: function (element, document) {

	}
};

WebForms.TextBox.prototype = {
	Create: function (document) {
		return document.createElement("input");
	},
	Update: function (element, document) {

	}
};

WebForms.TextArea.prototype = {
	Create: function (document) {
		return document.createElement("input");
	},
	Update: function (element, document) {

	}
};

WebForms.Button.prototype = {
	Create: function (document) {
		return document.createElement("button");
	},
	Update: function (element, document) {
		element.textContent = this.Properties.Text;
		element.Control = this;
		element.onclick = function () {
			this.Control.Properties.OnClick();
		}
	}
};

