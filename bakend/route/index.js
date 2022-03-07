const {
    Router
} = require('express'),
    router = Router()


router.use('/posicion', require('../route/posicion.route'))
router.use('/jugador', require('../route/jugador.router'))
router.use('/arbitro', require('../route/arbitro.route'))
router.use('/arbitroPosicion', require('../route/posicionArbitro.route'))
router.use('/falta', require('../route/falta.route'))
router.use('/tecnico', require('../route/tecnico.route'))
router.use('/equipo', require('../route/equipo.route'))
router.use('/asociarPosicionJugador', require('../route/asignarPosicionJugador'))
router.use('/asociarPosicionArbitro', require('../route/asignarPosicionArbitro'))


module.exports = router