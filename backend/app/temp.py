from supabase import create_client, Client

# Initialize Supabase client
url = ""
key = "your-supabase-anon-key"
supabase: Client = create_client(url, key)

def print_data_from_table():
    response = supabase.from_("your_table_name").select("*").execute()
    if response.error:
        print("Error fetching data:", response.error)
    else:
        data = response.data
        print("Data from Supabase table:")
        for row in data:
            print(row)

if _name_ == "_main_":
    print_data_from_table()