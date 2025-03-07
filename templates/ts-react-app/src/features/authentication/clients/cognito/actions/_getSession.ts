import { CognitoUser } from 'amazon-cognito-identity-js'
import { _getCognitoPool } from './_getCognitoPool'
import { _getCognitoUser } from './_getCognitoUser'
import { _getCurrentUser } from './_getCurrentUser'

/**
 * Retrieves the user session for the given Cognito user.
 *
 * @param cognitoUser - The Cognito user object.
 * @returns A promise that resolves with the user session.
 * @throws If there is an error retrieving the user session.
 */
const asyncGetUserSession = (
    cognitoUser: CognitoUser,
  ) => {
    return new Promise(function (resolve, reject) {
        cognitoUser.getSession(function (err: any, session: any) {
          if (err) {
            reject(err)
          } else {
            resolve(session)
          }
        })
      }).catch((err) => {
        console.log(err)
        throw err
      })
}

export const _getCognitoUserSession = async () => {
    const currentUser = _getCurrentUser()
    if(currentUser){
        const session: any = await asyncGetUserSession(currentUser)
        return session;
    }else{
        throw 'No Session'
    }

   
}