 export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      bookings: {
        Row: {
          booking_date: string
          id: string
          number_of_seats: number
          trip_id: string | null
          user_id: string
        }
        Insert: {
          booking_date?: string
          id?: string
          number_of_seats: number
          trip_id?: string | null
          user_id: string
        }
        Update: {
          booking_date?: string
          id?: string
          number_of_seats?: number
          trip_id?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "bookings_trip_id_fkey"
            columns: ["trip_id"]
            isOneToOne: false
            referencedRelation: "trips"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookings_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      buses: {
        Row: {
          bus_number: string
          id: number
          is_available: boolean
          model: string
          seating_capacity: number
          year: number
        }
        Insert: {
          bus_number: string
          id?: number
          is_available: boolean
          model: string
          seating_capacity: number
          year: number
        }
        Update: {
          bus_number?: string
          id?: number
          is_available?: boolean
          model?: string
          seating_capacity?: number
          year?: number
        }
        Relationships: []
      }
      drivers: {
        Row: {
          employee_id: string
          id: string
          license_number: string
        }
        Insert: {
          employee_id: string
          id?: string
          license_number: string
        }
        Update: {
          employee_id?: string
          id?: string
          license_number?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_drivers_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      employees: {
        Row: {
          email: string | null
          id: string
          name: string
          phone_number: string | null
          role: string
        }
        Insert: {
          email?: string | null
          id?: string
          name: string
          phone_number?: string | null
          role: string
        }
        Update: {
          email?: string | null
          id?: string
          name?: string
          phone_number?: string | null
          role?: string
        }
        Relationships: []
      }
      payments: {
        Row: {
          amount: number
          booking_id: string | null
          id: string
          payment_date: string
          payment_status: string
        }
        Insert: {
          amount: number
          booking_id?: string | null
          id?: string
          payment_date?: string
          payment_status: string
        }
        Update: {
          amount?: number
          booking_id?: string | null
          id?: string
          payment_date?: string
          payment_status?: string
        }
        Relationships: [
          {
            foreignKeyName: "payments_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "bookings"
            referencedColumns: ["id"]
          }
        ]
      }
      trips: {
        Row: {
          arrival_location: string
          arrival_time: string
          bus_number: string | null
          departure_location: string
          departure_time: string
          id: string
          price: number
          seats_available: number
        }
        Insert: {
          arrival_location: string
          arrival_time: string
          bus_number?: string | null
          departure_location: string
          departure_time: string
          id?: string
          price: number
          seats_available: number
        }
        Update: {
          arrival_location?: string
          arrival_time?: string
          bus_number?: string | null
          departure_location?: string
          departure_time?: string
          id?: string
          price?: number
          seats_available?: number
        }
        Relationships: []
      }
      users: {
        Row: {
          email: string
          id: string
          name: string
          password: string
          phone_number: string | null
        }
        Insert: {
          email: string
          id?: string
          name: string
          password: string
          phone_number?: string | null
        }
        Update: {
          email?: string
          id?: string
          name?: string
          password?: string
          phone_number?: string | null
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

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
