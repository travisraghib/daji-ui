import { Injectable, Inject } from '@angular/core';

@Injectable()
export class SessionStorageService {
    constructor() {
        if (window.hasOwnProperty('sessionStorage') && window.sessionStorage !== null) {
            try {
                window.sessionStorage.setItem('test', 'test');
                window.sessionStorage.removeItem('test');
            } catch (e) {
                console.warn('sessionStorage not functional, falling back to session Object.');
            }
        }
    }

    set(key, obj) {
        if(!obj) return;
        window.sessionStorage[key] = JSON.stringify(obj);
        
        return obj;
    }

    get(key) {
        let str = window.sessionStorage.getItem(key);
        if(!str) return null;

        return JSON.parse(str);
    }

    clear() {
        window.sessionStorage.clear();
    }
}
