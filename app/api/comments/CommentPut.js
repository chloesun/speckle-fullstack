const winston = require( '../../../config/logger' )

const Comment = require( '../../../models/Comment' )
const PermissionCheck = require( '../middleware/PermissionCheck' )

module.exports = function ( req, res ) {
  if ( !req.params.commentId || !req.body ) {
    res.status( 400 )
    return res.send( { success: false, message: 'No commentId or comment provided.' } )
  }

  Comment.findOne( { _id: req.params.commentId } )
    .then( resource => PermissionCheck( req.user, 'write', resource, Object.keys( req.body ) ) )
    .then( resource => resource.set( req.body ).save() )
    .then( () => {
      return res.send( { success: true, message: 'Comment edited', fields: Object.keys( req.body ) } )
    } )
    .catch( err => {
      winston.error( JSON.stringify( err ) )
      res.status( err.message.indexOf( 'authorised' ) >= 0 ? 401 : 404 )
      res.send( { success: false, message: err.message, commentId: req.commentId } )
    } )
}
