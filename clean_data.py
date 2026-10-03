import pandas as pd

INPUT_FILE = "parfumo_data_clean.csv"
OUTPUT_FILE = "parfumo_data.csv"

df = pd.read_csv(INPUT_FILE)

# Remove completely empty rows
df = df.dropna(how="all")

# Remove duplicate perfume records
df = df.drop_duplicates(subset=["Name", "Brand"], keep="first")

# Clean text columns
text_columns = [
    "Name",
    "Brand",
    "Concentration",
    "Main_Accords",
    "Top_Notes",
    "Middle_Notes",
    "Base_Notes",
    "Perfumers"
]

for column in text_columns:
    if column in df.columns:
        df[column] = (
            df[column]
            .fillna("")
            .astype(str)
            .str.strip()
        )

# Convert numerical columns
numeric_columns = [
    "Release_Year",
    "Rating_Value",
    "Rating_Count"
]

for column in numeric_columns:
    if column in df.columns:
        df[column] = pd.to_numeric(df[column], errors="coerce")

# Remove impossible rating values
if "Rating_Value" in df.columns:
    df.loc[
        (df["Rating_Value"] < 0) | (df["Rating_Value"] > 10),
        "Rating_Value"
    ] = pd.NA

# Remove impossible rating counts
if "Rating_Count" in df.columns:
    df.loc[
        df["Rating_Count"] < 0,
        "Rating_Count"
    ] = pd.NA

# Clean URL column
if "URL" in df.columns:
    df["URL"] = df["URL"].fillna("").astype(str).str.strip()

# Save cleaned dataset
df.to_csv(OUTPUT_FILE, index=False)

print("Data cleaning completed.")
print(f"Rows: {len(df)}")
print(f"Columns: {len(df.columns)}")
print(f"Saved to: {OUTPUT_FILE}")