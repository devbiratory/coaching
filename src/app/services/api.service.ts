import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private dbPath = '/messages';

  messagesRef: AngularFirestoreCollection<Message>;
  constructor(private db: AngularFirestore) {
    this.messagesRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Message> {
    return this.messagesRef;
  }

  create(message: Message): any {
    return this.messagesRef.add({ ...message });
  }

  update(id: string, data: any): Promise<void> {
    return this.messagesRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.messagesRef.doc(id).delete();
  }
}
