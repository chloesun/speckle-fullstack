'use strict'
const winston = require( '../../../config/logger' )

const SpeckleObject = require( '../../../models/SpeckleObject' )
const PermissionCheck = require( '../middleware/PermissionCheck' )

module.exports = ( req, res ) => {
  if ( !req.params.objectId ) {
    res.status( 400 )
    return res.send( { success: false, message: 'No objectId provided.' } )
  }

  SpeckleObject.findOne( { _id: req.params.objectId } )
    .then( obj => PermissionCheck( req.user, 'delete', obj ) )
    .then( obj => obj.remove() )
    .then( () => {
      return res.send( { success: true, message: 'Object was deleted. Bye bye data.' } )
    } )
    .catch( err => {
      winston.error( JSON.stringify( err ) )
      res.status( err.message === 'Unauthorized. Please log in.' ? 401 : 404 )
      res.send( { success: false, message: err.toString() } )
    } )
}
