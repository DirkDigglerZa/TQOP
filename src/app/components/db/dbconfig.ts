import { NgModule } from '@angular/core';
import { NgxIndexedDBModule, DBConfig  } from 'ngx-indexed-db';

const dbConfig: DBConfig  = {
    name: 'MyDb',
    version: 1,
    objectStoresMeta: [{
      store: 'weapons',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'name', keypath: 'name', options: { unique: false } },
        { name: 'email', keypath: 'email', options: { unique: false } }
      ]
    }]
};

@NgModule({
      imports: [
        NgxIndexedDBModule.forRoot(dbConfig)
      ]
})
export class NgxModule { }