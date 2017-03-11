import { Injectable, Inject } from '@angular/core';

@Injectable()
export class LocalStorageService {
    

    constructor() {
        if (window.hasOwnProperty('localStorage') && window.localStorage !== null) {
            try {
                window.localStorage.setItem('test', 'test');
                window.localStorage.removeItem('test');
            } catch (e) {
                console.warn('localStorage not functional, falling back to session Object.');
            }
        }
    }

    set(key, obj) {
        window.localStorage[key] = JSON.stringify(obj);

        return obj;
    }

    get(key) {
        let str = window.localStorage.getItem(key);

        if(!str) return null;

        return JSON.parse(str);
    }

    clear() {
        window.localStorage.clear();
    }
}
