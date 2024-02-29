import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  supabaseUrl = 'https://vsvsuuedixbrrssrqrzi.supabase.co';
  supabaseAnonKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZzdnN1dWVkaXhicnJzc3JxcnppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM3ODQyMTAsImV4cCI6MjAxOTM2MDIxMH0.iOwRbNZi4iTMOKBeNGGrnyKv9zseIO72KJDCY_pmtng';
  supabase = createClient(this.supabaseUrl, this.supabaseAnonKey, {
    auth: {
      storage: localStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  });

  async resetPassword(accessToken: any, refreshToken: any, password: any) {
    const { error } = await this.supabase.auth.setSession({
      access_token: accessToken,
      refresh_token: refreshToken,
    });
    if (error) {
      return { error: error };
    } else {
      const { data, error } = await this.supabase.auth.updateUser({
        password: password,
      });
      if (error) {
        return { error: error };
      }
      return data;
    }
  }

  constructor() {}
}

