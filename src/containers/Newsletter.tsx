import React from "react";

class Newsletter extends React.Component<any, any> {
    render() {
        return <section className="newsletter section-padding">
            <div className="container">
                <form className="newsletter-form">
                    <label htmlFor="email">Newsletter</label>
                    <div className="input-group mb-3">
                        <input type="email" className="form-control" placeholder="adres e-mail" id="email" />
                            <div className="input-group-append">
                                <input type="submit" value="Zapisz sie!" />
                            </div>
                    </div>
                </form>
            </div>
        </section>;
    }
}

export default Newsletter;
