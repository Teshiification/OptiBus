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
          user_id: string | null
        }
        Insert: {
          booking_date?: string
          id?: string
          number_of_seats: number
          trip_id?: string | null
          user_id?: string | null
        }
        Update: {
          booking_date?: string
          id?: string
          number_of_seats?: number
          trip_id?: string | null
          user_id?: string | null
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
      bus: {
        Row: {
          bus_id: string
          bus_number: number | null
          capacity: number | null
          created_at: string
          licenseplate: string | null
          model: string | null
          status: boolean | null
          tuev: string | null
          year: number | null
        }
        Insert: {
          bus_id?: string
          bus_number?: number | null
          capacity?: number | null
          created_at?: string
          licenseplate?: string | null
          model?: string | null
          status?: boolean | null
          tuev?: string | null
          year?: number | null
        }
        Update: {
          bus_id?: string
          bus_number?: number | null
          capacity?: number | null
          created_at?: string
          licenseplate?: string | null
          model?: string | null
          status?: boolean | null
          tuev?: string | null
          year?: number | null
        }
        Relationships: []
      }
      driver: {
        Row: {
          created_at: string
          driver_id: string
          first_name: string | null
          last_name: string | null
          license_date: string | null
          license_number: number | null
          status: boolean | null
          tel_number: number | null
        }
        Insert: {
          created_at?: string
          driver_id?: string
          first_name?: string | null
          last_name?: string | null
          license_date?: string | null
          license_number?: number | null
          status?: boolean | null
          tel_number?: number | null
        }
        Update: {
          created_at?: string
          driver_id?: string
          first_name?: string | null
          last_name?: string | null
          license_date?: string | null
          license_number?: number | null
          status?: boolean | null
          tel_number?: number | null
        }
        Relationships: []
      }
      drivers: {
        Row: {
          email: string | null
          id: string
          license_number: string
          name: string
          phone_number: string | null
        }
        Insert: {
          email?: string | null
          id?: string
          license_number: string
          name: string
          phone_number?: string | null
        }
        Update: {
          email?: string | null
          id?: string
          license_number?: string
          name?: string
          phone_number?: string | null
        }
        Relationships: []
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
      feedback: {
        Row: {
          comment: string | null
          created_at: string
          feedback_date: string | null
          feedback_id: string
          rating: number | null
          reservation_id: string | null
        }
        Insert: {
          comment?: string | null
          created_at?: string
          feedback_date?: string | null
          feedback_id?: string
          rating?: number | null
          reservation_id?: string | null
        }
        Update: {
          comment?: string | null
          created_at?: string
          feedback_date?: string | null
          feedback_id?: string
          rating?: number | null
          reservation_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Feedback_reservation_id_fkey"
            columns: ["reservation_id"]
            isOneToOne: false
            referencedRelation: "reservation"
            referencedColumns: ["reservation_id"]
          }
        ]
      }
      passanger: {
        Row: {
          created_at: string
          email: string
          first_name: string
          last_name: string
          passanger_id: string
          phone: number
          user_id: string
        }
        Insert: {
          created_at?: string
          email: string
          first_name: string
          last_name: string
          passanger_id?: string
          phone: number
          user_id: string
        }
        Update: {
          created_at?: string
          email?: string
          first_name?: string
          last_name?: string
          passanger_id?: string
          phone?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "Passangers_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      payment: {
        Row: {
          amount: number | null
          created_at: string
          payment_date: string | null
          payment_id: string
          payment_method: string | null
          reservation_id: string | null
        }
        Insert: {
          amount?: number | null
          created_at?: string
          payment_date?: string | null
          payment_id?: string
          payment_method?: string | null
          reservation_id?: string | null
        }
        Update: {
          amount?: number | null
          created_at?: string
          payment_date?: string | null
          payment_id?: string
          payment_method?: string | null
          reservation_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Payments_reservation_id_fkey"
            columns: ["reservation_id"]
            isOneToOne: false
            referencedRelation: "reservation"
            referencedColumns: ["reservation_id"]
          }
        ]
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
      reservation: {
        Row: {
          bus_id: string | null
          created_at: string
          depature_date: string | null
          passanger_id: string | null
          reservation_date: string | null
          reservation_id: string
          route_id: string | null
          seat_number: number | null
        }
        Insert: {
          bus_id?: string | null
          created_at?: string
          depature_date?: string | null
          passanger_id?: string | null
          reservation_date?: string | null
          reservation_id?: string
          route_id?: string | null
          seat_number?: number | null
        }
        Update: {
          bus_id?: string | null
          created_at?: string
          depature_date?: string | null
          passanger_id?: string | null
          reservation_date?: string | null
          reservation_id?: string
          route_id?: string | null
          seat_number?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "Reservations_bus_id_fkey"
            columns: ["bus_id"]
            isOneToOne: false
            referencedRelation: "bus"
            referencedColumns: ["bus_id"]
          },
          {
            foreignKeyName: "Reservations_passanger_id_fkey"
            columns: ["passanger_id"]
            isOneToOne: false
            referencedRelation: "passanger"
            referencedColumns: ["passanger_id"]
          }
        ]
      }
      trips: {
        Row: {
          arrival_location: string
          arrival_time: string
          departure_location: string
          departure_time: string
          id: string
          price: number
          seats_available: number
        }
        Insert: {
          arrival_location: string
          arrival_time: string
          departure_location: string
          departure_time: string
          id?: string
          price: number
          seats_available: number
        }
        Update: {
          arrival_location?: string
          arrival_time?: string
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
