// src/composables/useContacts.ts

import { registerPlugin } from '@capacitor/core';
import type {
  ContactsPlugin,
  PermissionStatus,
  GetContactOptions,
  GetContactResult,
  GetContactsOptions,
  GetContactsResult,
  CreateContactOptions,
  CreateContactResult,
  DeleteContactOptions,
  PickContactOptions,
  PickContactResult,
} from '../src/definitions.ts';

const Contacts = registerPlugin<ContactsPlugin>('CapacitorCommunityContacts');

export function useContacts() {

  // ── Berechtigungen ─────────────────────────────────────────────

  async function checkPermissions(): Promise<PermissionStatus> {
    return Contacts.checkPermissions();
  }

  async function requestPermissions(): Promise<PermissionStatus> {
    return Contacts.requestPermissions();
  }

  // ── Kontakt lesen ───────────────────────────────────────────────

  async function getContact(options: GetContactOptions): Promise<GetContactResult> {
    return Contacts.getContact(options);
  }

  async function getContacts(options: GetContactsOptions): Promise<GetContactsResult> {
    return Contacts.getContacts(options);
  }

  // ── Kontakt erstellen ───────────────────────────────────────────

  async function createContact(options: CreateContactOptions): Promise<CreateContactResult> {
    return Contacts.createContact(options);
  }

  // ── Kontakt löschen ─────────────────────────────────────────────

  async function deleteContact(options: DeleteContactOptions): Promise<void> {
    return Contacts.deleteContact(options);
  }

  // ── Kontakt auswählen (nativer Picker) ──────────────────────────

  async function pickContact(options: PickContactOptions): Promise<PickContactResult> {
    return Contacts.pickContact(options);
  }

  // ── Hilfsfunktion: Berechtigung sicherstellen ───────────────────

  async function ensurePermission(): Promise<boolean> {
    let { contacts } = await checkPermissions();

    if (contacts === 'prompt' || contacts === 'prompt-with-rationale') {
      ({ contacts } = await requestPermissions());
    }

    return contacts === 'granted';
  }

  return {
    checkPermissions,
    requestPermissions,
    getContact,
    getContacts,
    createContact,
    deleteContact,
    pickContact,
    ensurePermission,
  };
}