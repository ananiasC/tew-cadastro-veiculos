const { DataTypes } = require('sequelize')
const db = require('../db/conn')


const Veiculo = db.define('Veiculo', {
  nome: {
    type: DataTypes.STRING,
    required: true
  },
  modelo: {
    type: DataTypes.STRING,
    required: true
  },
  motor: {
    type: DataTypes.STRING,
    required: true
  },
  ano: {
    type: DataTypes.INTEGER,
    required: true
  },
  fabricante: {
    type: DataTypes.STRING,
    required: true
  },
  valor: {
    type: DataTypes.DOUBLE,
    required: true
  },
  cor: {
    type: DataTypes.STRING,
    required: true
  },
  opcional: {
    type: DataTypes.STRING,
    required: false
  }

})

module.exports = Veiculo