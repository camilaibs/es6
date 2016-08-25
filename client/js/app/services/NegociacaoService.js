class NegociacaoService {

    constructor() {
        this._http = new HttpService();
    }

    obtemNegociacoesDaSemana() {
        return this._http.get('negociacoes/semasna')
                .then(response =>
                    response.map(objeto =>
                        new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)
                    )
                )
                .catch(erro => {
                    console.log(erro);
                    throw new Error('Não foi possível obter as negociações da semana');
                });
    }

    obtemNegociacoesDaSemanaAnterior() {
        return this._http.get('negociacoes/anterior')
                .then(response =>
                    response.map(objeto =>
                        new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)
                    )
                )
                .catch(erro => {
                    console.log(erro);
                    throw new Error('Não foi possível obter as negociações da semana anterior');
                });
    }

    obtemNegociacoesDaSemanaRetrasada() {
        return this._http.get('negociacoes/retrasada')
                .then(response =>
                    response.map(objeto =>
                        new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)
                    )
                )
                .catch(erro => {
                    console.log(erro);
                    throw new Error('Não foi possível obter as negociações da semana retrasada');
                });
    }

    obtemNegociacoes() {
        return Promise.all([
                this.obtemNegociacoesDaSemana(),
                this.obtemNegociacoesDaSemanaAnterior(),
                this.obtemNegociacoesDaSemanaRetrasada()
            ])
            .then(negociacoes =>
                negociacoes.reduce((atual, novo) => novo.concat(atual), [])
            )
            .catch(erro => {
                console.log(erro);
                throw new Error('Não foi possível obter as negociações');
            });
    }

}