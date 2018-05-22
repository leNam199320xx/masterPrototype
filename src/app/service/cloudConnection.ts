
import { StitchClientFactory } from 'mongodb-stitch';

export class CloudConnectionService {
    clientPromise = StitchClientFactory.create('ifakebook-eqvwi');
    client;
    db;
    constructor() {
        this.clientPromise.then(_client => {
            this.client = _client;
            this.db = this.client.service('mongodb', 'mongodb-atlas').db('ifakebook_db');
        });
    }

    login() {
        if (!this.client || !this.db) {
            return false;
        }
        this.client.login().then(() =>
            this.db.collection('user').updateOne({ owner_id: this.client.authedId() }, { $set: { number: 42 } }, { upsert: true })
        ).then(() =>
            this.db.collection('user').find({ owner_id: this.client.authedId() }).limit(100).execute()
        ).then(docs => {
            console.log('Found docs', docs);
            console.log('[MongoDB Stitch] Connected to Stitch');
        }).catch(err => {
            console.error(err);
        });
        return true;
    }
}
