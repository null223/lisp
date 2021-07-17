// import { firestore } from "firebase-admin"
import * as functions from "firebase-functions"
// import axios from 'axios'

// import { db, auth } from "./db"


exports.line_webhook = functions.https
  .onRequest((request, response) => {
    // const event = request.body
    functions.logger.log('hello world!')
  }
)