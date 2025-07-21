export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          role: 'borrower' | 'lender' | 'admin'
          first_name: string | null
          last_name: string | null
          phone: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          role: 'borrower' | 'lender' | 'admin'
          first_name?: string | null
          last_name?: string | null
          phone?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          role?: 'borrower' | 'lender' | 'admin'
          first_name?: string | null
          last_name?: string | null
          phone?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      loans: {
        Row: {
          id: string
          borrower_id: string
          lender_id: string | null
          amount: number
          reason: string
          status: 'pending' | 'approved' | 'funded' | 'repaid' | 'defaulted'
          repayment_date: string
          date_requested: string
          date_funded: string | null
          interest_rate: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          borrower_id: string
          lender_id?: string | null
          amount: number
          reason: string
          status?: 'pending' | 'approved' | 'funded' | 'repaid' | 'defaulted'
          repayment_date: string
          date_requested?: string
          date_funded?: string | null
          interest_rate?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          borrower_id?: string
          lender_id?: string | null
          amount?: number
          reason?: string
          status?: 'pending' | 'approved' | 'funded' | 'repaid' | 'defaulted'
          repayment_date?: string
          date_requested?: string
          date_funded?: string | null
          interest_rate?: number
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      user_role: 'borrower' | 'lender' | 'admin'
      loan_status: 'pending' | 'approved' | 'funded' | 'repaid' | 'defaulted'
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Profile = Database['public']['Tables']['profiles']['Row']
export type Loan = Database['public']['Tables']['loans']['Row']
export type UserRole = Database['public']['Enums']['user_role']
export type LoanStatus = Database['public']['Enums']['loan_status']
