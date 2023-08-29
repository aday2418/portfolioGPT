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
      api_calls: {
        Row: {
          api_key: string | null
          created_at: string
          id: number
          user_id: string | null
        }
        Insert: {
          api_key?: string | null
          created_at?: string
          id?: number
          user_id?: string | null
        }
        Update: {
          api_key?: string | null
          created_at?: string
          id?: number
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "api_calls_api_key_fkey"
            columns: ["api_key"]
            referencedRelation: "api_keys"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "api_calls_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      api_keys: {
        Row: {
          active: boolean | null
          created_at: string | null
          id: string
          key: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          active?: boolean | null
          created_at?: string | null
          id?: string
          key?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          active?: boolean | null
          created_at?: string | null
          id?: string
          key?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "api_keys_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles: {
        Row: {
          chatbot_color: string | null
          email: string | null
          id: string
          info: string | null
          remove_branding: boolean | null
          stripe_id: string | null
          subscription_tier: string | null
          updated_at: string | null
          welcome_message: string | null
        }
        Insert: {
          chatbot_color?: string | null
          email?: string | null
          id: string
          info?: string | null
          remove_branding?: boolean | null
          stripe_id?: string | null
          subscription_tier?: string | null
          updated_at?: string | null
          welcome_message?: string | null
        }
        Update: {
          chatbot_color?: string | null
          email?: string | null
          id?: string
          info?: string | null
          remove_branding?: boolean | null
          stripe_id?: string | null
          subscription_tier?: string | null
          updated_at?: string | null
          welcome_message?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_subscription_tier_fkey"
            columns: ["subscription_tier"]
            referencedRelation: "subscription_tiers"
            referencedColumns: ["id"]
          }
        ]
      }
      subscription_tiers: {
        Row: {
          chatbot_personalities_included: boolean
          custom_themes_included: boolean
          id: string
          messages_limit: number
          monthly_cost: number
          name: string
          remove_branding: boolean
          resume_words_limit: number
          stripe_price_id: string | null
          stripe_product_id: string | null
        }
        Insert: {
          chatbot_personalities_included: boolean
          custom_themes_included: boolean
          id?: string
          messages_limit: number
          monthly_cost: number
          name: string
          remove_branding: boolean
          resume_words_limit: number
          stripe_price_id?: string | null
          stripe_product_id?: string | null
        }
        Update: {
          chatbot_personalities_included?: boolean
          custom_themes_included?: boolean
          id?: string
          messages_limit?: number
          monthly_cost?: number
          name?: string
          remove_branding?: boolean
          resume_words_limit?: number
          stripe_price_id?: string | null
          stripe_product_id?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
