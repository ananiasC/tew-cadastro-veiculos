const Veiculo = require('../model/Veiculo')


module.exports = class VeiculoController {

  static newVeiculo(req, res) {
    res.render('veiculos/veiculoform')
  }

  static async newVeiculoSave(req, res) {
    const veiculo = {
      nome: req.body.nome,
      modelo: req.body.modelo,
      motor: req.body.motor,
      ano: req.body.ano,
      fabricante: req.body.fabricante,
      valor: req.body.valor,
      cor: req.body.cor,
      opcional: req.body.opcional
    }

    await Veiculo.create(veiculo)
      .then(() => {
        this.allVeiculos()//carrega todos os usuários
      }).catch((error) => {
        console.log(error)
      })
    res.redirect('/veiculos/allVeiculos')

  }
  static async home(req, res) {
    res.render('veiculos/home')
  }

  static async allVeiculos(req, res) {
    const veiculos = await Veiculo.findAll({ raw: true })
    res.render('veiculos/viewveiculo', { veiculos })
  }

  static async updateVeiculo(req, res) {
    const id = req.params.id
    const veiculo = await Veiculo.findOne({ where: { id: id }, raw: true })
    res.render('veiculos/edit', { veiculo })

  }

  static async updateVeiculoSave(req, res) {
    const id = req.body.id
    const veiculo = {
      nome: req.body.nome,
      modelo: req.body.modelo,
      motor: req.body.motor,
      ano: req.body.ano,
      fabricante: req.body.fabricante,
      valor: req.body.valor,
      cor: req.body.cor,
      opcional: req.body.opcional
    }
    await Veiculo.update(veiculo, { where: { id: id } })
      .then(res.redirect('/veiculos/allVeiculos'))
      .catch((err) => {
        console.log(err)
      })
  }

  static async removeVeiculo(req, res) {
    const id = req.body.id
    await Veiculo.destroy({ where: { id: id } })
      .then(res.redirect('/veiculos/allVeiculos'))
      .catch((err) => {
        console.log(err)
      })
  }


}
