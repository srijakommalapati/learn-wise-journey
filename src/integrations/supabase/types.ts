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
      calendar_tasks: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          status: string | null
          task_date: string
          task_time: string | null
          title: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          status?: string | null
          task_date: string
          task_time?: string | null
          title: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          status?: string | null
          task_date?: string
          task_time?: string | null
          title?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "calendar_tasks_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      problem_attempts: {
        Row: {
          attempted_at: string | null
          id: string
          is_solved: boolean | null
          problem_id: string
          solution: string | null
          testcases_solved: number | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          attempted_at?: string | null
          id?: string
          is_solved?: boolean | null
          problem_id: string
          solution?: string | null
          testcases_solved?: number | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          attempted_at?: string | null
          id?: string
          is_solved?: boolean | null
          problem_id?: string
          solution?: string | null
          testcases_solved?: number | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "problem_attempts_problem_id_fkey"
            columns: ["problem_id"]
            isOneToOne: false
            referencedRelation: "problems"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "problem_attempts_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      problems: {
        Row: {
          created_at: string | null
          description: string
          difficulty: string | null
          example_input: string | null
          example_output: string | null
          hints: string | null
          id: string
          tags: string[] | null
          title: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description: string
          difficulty?: string | null
          example_input?: string | null
          example_output?: string | null
          hints?: string | null
          id?: string
          tags?: string[] | null
          title: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string
          difficulty?: string | null
          example_input?: string | null
          example_output?: string | null
          hints?: string | null
          id?: string
          tags?: string[] | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          branch: string | null
          cgpa: number | null
          college_name: string | null
          created_at: string | null
          degree: string | null
          first_name: string | null
          id: string
          last_name: string | null
          mobile: string | null
          role: Database["public"]["Enums"]["app_role"] | null
          updated_at: string | null
        }
        Insert: {
          avatar_url?: string | null
          branch?: string | null
          cgpa?: number | null
          college_name?: string | null
          created_at?: string | null
          degree?: string | null
          first_name?: string | null
          id: string
          last_name?: string | null
          mobile?: string | null
          role?: Database["public"]["Enums"]["app_role"] | null
          updated_at?: string | null
        }
        Update: {
          avatar_url?: string | null
          branch?: string | null
          cgpa?: number | null
          college_name?: string | null
          created_at?: string | null
          degree?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          mobile?: string | null
          role?: Database["public"]["Enums"]["app_role"] | null
          updated_at?: string | null
        }
        Relationships: []
      }
      questions: {
        Row: {
          category: string
          created_at: string | null
          difficulty: string | null
          expected_answer: string | null
          id: string
          question_text: string
          updated_at: string | null
        }
        Insert: {
          category: string
          created_at?: string | null
          difficulty?: string | null
          expected_answer?: string | null
          id?: string
          question_text: string
          updated_at?: string | null
        }
        Update: {
          category?: string
          created_at?: string | null
          difficulty?: string | null
          expected_answer?: string | null
          id?: string
          question_text?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      salary_chart: {
        Row: {
          created_at: string | null
          estimated_salary: number | null
          id: string
          updated_at: string | null
          user_id: string
          week_starting_date: string
        }
        Insert: {
          created_at?: string | null
          estimated_salary?: number | null
          id?: string
          updated_at?: string | null
          user_id: string
          week_starting_date: string
        }
        Update: {
          created_at?: string | null
          estimated_salary?: number | null
          id?: string
          updated_at?: string | null
          user_id?: string
          week_starting_date?: string
        }
        Relationships: [
          {
            foreignKeyName: "salary_chart_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      session_reports: {
        Row: {
          confidence_audio_score: number | null
          created_at: string | null
          emotion_analysis: Json | null
          id: string
          score: number | null
          session_id: string
          strengths: string[] | null
          suggestions: string[] | null
          updated_at: string | null
          weaknesses: string[] | null
        }
        Insert: {
          confidence_audio_score?: number | null
          created_at?: string | null
          emotion_analysis?: Json | null
          id?: string
          score?: number | null
          session_id: string
          strengths?: string[] | null
          suggestions?: string[] | null
          updated_at?: string | null
          weaknesses?: string[] | null
        }
        Update: {
          confidence_audio_score?: number | null
          created_at?: string | null
          emotion_analysis?: Json | null
          id?: string
          score?: number | null
          session_id?: string
          strengths?: string[] | null
          suggestions?: string[] | null
          updated_at?: string | null
          weaknesses?: string[] | null
        }
        Relationships: [
          {
            foreignKeyName: "session_reports_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      session_transcripts: {
        Row: {
          id: string
          message: string
          session_id: string
          speaker: string | null
          timestamp: string | null
        }
        Insert: {
          id?: string
          message: string
          session_id: string
          speaker?: string | null
          timestamp?: string | null
        }
        Update: {
          id?: string
          message?: string
          session_id?: string
          speaker?: string | null
          timestamp?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "session_transcripts_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      sessions: {
        Row: {
          created_at: string | null
          id: string
          interviewer: string | null
          scheduled_time: string
          status: string | null
          topic: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          interviewer?: string | null
          scheduled_time: string
          status?: string | null
          topic: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          interviewer?: string | null
          scheduled_time?: string
          status?: string | null
          topic?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "sessions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      test_cases: {
        Row: {
          created_at: string | null
          expected_output: string
          id: string
          input: string
          is_hidden: boolean | null
          problem_id: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          expected_output: string
          id?: string
          input: string
          is_hidden?: boolean | null
          problem_id: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          expected_output?: string
          id?: string
          input?: string
          is_hidden?: boolean | null
          problem_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "test_cases_problem_id_fkey"
            columns: ["problem_id"]
            isOneToOne: false
            referencedRelation: "problems"
            referencedColumns: ["id"]
          },
        ]
      }
      user_settings: {
        Row: {
          created_at: string | null
          id: string
          language_preference: string | null
          notification_enabled: boolean | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          language_preference?: string | null
          notification_enabled?: boolean | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          language_preference?: string | null
          notification_enabled?: boolean | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_settings_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      weekly_progress: {
        Row: {
          created_at: string | null
          current_streak: number | null
          id: string
          problems_attempted: number | null
          rating: number | null
          study_time_minutes: number | null
          testcases_solved: number | null
          total_testcases_attempted: number | null
          updated_at: string | null
          user_id: string
          week_starting_date: string
        }
        Insert: {
          created_at?: string | null
          current_streak?: number | null
          id?: string
          problems_attempted?: number | null
          rating?: number | null
          study_time_minutes?: number | null
          testcases_solved?: number | null
          total_testcases_attempted?: number | null
          updated_at?: string | null
          user_id: string
          week_starting_date: string
        }
        Update: {
          created_at?: string | null
          current_streak?: number | null
          id?: string
          problems_attempted?: number | null
          rating?: number | null
          study_time_minutes?: number | null
          testcases_solved?: number | null
          total_testcases_attempted?: number | null
          updated_at?: string | null
          user_id?: string
          week_starting_date?: string
        }
        Relationships: [
          {
            foreignKeyName: "weekly_progress_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      weekly_targets: {
        Row: {
          created_at: string | null
          id: string
          problems_target: number | null
          rating_target: number | null
          study_time_minutes_target: number | null
          updated_at: string | null
          user_id: string
          week_starting_date: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          problems_target?: number | null
          rating_target?: number | null
          study_time_minutes_target?: number | null
          updated_at?: string | null
          user_id: string
          week_starting_date: string
        }
        Update: {
          created_at?: string | null
          id?: string
          problems_target?: number | null
          rating_target?: number | null
          study_time_minutes_target?: number | null
          updated_at?: string | null
          user_id?: string
          week_starting_date?: string
        }
        Relationships: [
          {
            foreignKeyName: "weekly_targets_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      app_role: "student" | "admin"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["student", "admin"],
    },
  },
} as const
