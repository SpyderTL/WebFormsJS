Application = {
	Page: null,
	Start: function () {
		Application.Page = new WebForms.Page({
			Title: "Hello, World!"
		});

		Application.Page.Controls.push(new WebForms.Button({
			Text: "Click Me!",
			OnClick: function () {
				this.Text = "You Clicked Me!!!";
				Application.Page.Update(document, document);
			}
		}));

		Application.Page.Update(document, document);
	}
};