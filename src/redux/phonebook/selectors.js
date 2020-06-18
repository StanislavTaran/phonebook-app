import { createSelector } from 'reselect';

export const getAllContacts = state => state.contacts.contacts;

export const getFilter = state => state.contacts.filter;

export const getFilteredContacts = createSelector([getAllContacts, getFilter], (contacts, filter) =>
  contacts.filter(item => item.name.toLowerCase().includes(filter.toLowerCase())),
);

export const getFilteredSortedContacts = createSelector([getFilteredContacts], contacts =>
  contacts.sort(function sort(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }),
);

export const getExistContactFlag = state => state.contacts.notification.isContactAlreadyExist;
