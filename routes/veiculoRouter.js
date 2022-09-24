const express = require('express')
const router = express.Router()
const VeiculoController = require('../controllers/VeiculoController')
const Veiculo = require('../model/Veiculo')

router.get('/add', VeiculoController.newVeiculo)
router.post('/add', VeiculoController.newVeiculoSave)
router.get('/edit/:id', VeiculoController.updateVeiculo)
router.post('/edit', VeiculoController.updateVeiculoSave)
router.post('/remove', VeiculoController.removeVeiculo)
router.get('/allVeiculos', VeiculoController.allVeiculos)
router.get('/', VeiculoController.home)


module.exports = router
