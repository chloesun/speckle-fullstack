const winston = require( '../../../config/logger' )

const SpeckleObject = require( '../../../models/SpeckleObject' )
const PermissionCheck = require( '../middleware/PermissionCheck' )

module.exports = ( req, res ) => {
  if ( !req.params.objectId ) {
    res.status( 400 )
    return res.send( { success: false, message: 'Malformed request.' } )
  }
  SpeckleObject.findOne( { _id: req.params.objectId } )
    .then( result => PermissionCheck( req.user, 'write', result, Object.keys( req.body ) ) )
    .then( result => result.set( req.body ).save() )
    .then( () => {
      res.send( { success: true, message: 'Object updated.' } )
    } )
    .catch( err => {
      winston.error( JSON.stringify( err ) )
      res.status( 400 )
      return res.send( { success: false, message: err.toString() } )
    } )
}
