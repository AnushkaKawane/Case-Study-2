import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity


DATA_FILE = "parfumo_data.csv"


class PerfumeRecommender:

    def __init__(self):

        print("Loading dataset...")

        self.df = pd.read_csv(DATA_FILE)

        print(f"Dataset loaded: {len(self.df)} rows")

        self.df = self.df.fillna("")

        # Make sure required columns exist
        required_columns = [
            "Name",
            "Brand",
            "Main_Accords",
            "Top_Notes",
            "Middle_Notes",
            "Base_Notes",
            "Concentration"
        ]

        for column in required_columns:
            if column not in self.df.columns:
                self.df[column] = ""

        # Convert columns to strings
        for column in required_columns:
            self.df[column] = (
                self.df[column]
                .astype(str)
                .str.strip()
            )

        # Combine perfume characteristics
        self.df["combined_features"] = (
            self.df["Brand"] + " " +
            self.df["Main_Accords"] + " " +
            self.df["Top_Notes"] + " " +
            self.df["Middle_Notes"] + " " +
            self.df["Base_Notes"] + " " +
            self.df["Concentration"]
        )

        print("Creating TF-IDF features...")

        self.vectorizer = TfidfVectorizer(
            stop_words="english"
        )

        self.feature_matrix = self.vectorizer.fit_transform(
            self.df["combined_features"]
        )

        print("Model created successfully.")

    def get_all_perfumes(self):

        return (
            self.df["Name"]
            .dropna()
            .astype(str)
            .tolist()
        )

    def recommend(self, perfume_name, number=6):

        matches = self.df[
            self.df["Name"].str.lower()
            == perfume_name.lower()
        ]

        if matches.empty:
            return []

        index = matches.index[0]

        selected_vector = self.feature_matrix[index]

        similarity_scores = cosine_similarity(
            selected_vector,
            self.feature_matrix
        ).flatten()

        similar_indices = similarity_scores.argsort()[
            ::-1
        ]

        recommendations = []

        for item_index in similar_indices:

            # Don't recommend the perfume itself
            if item_index == index:
                continue

            perfume = self.df.iloc[item_index]

            recommendations.append({
                "name": perfume["Name"],
                "brand": perfume["Brand"],
                "rating": perfume.get(
                    "Rating_Value",
                    ""
                ),
                "rating_count": perfume.get(
                    "Rating_Count",
                    ""
                ),
                "main_accords": perfume.get(
                    "Main_Accords",
                    ""
                ),
                "top_notes": perfume.get(
                    "Top_Notes",
                    ""
                ),
                "middle_notes": perfume.get(
                    "Middle_Notes",
                    ""
                ),
                "base_notes": perfume.get(
                    "Base_Notes",
                    ""
                ),
                "concentration": perfume.get(
                    "Concentration",
                    ""
                ),
                "url": perfume.get(
                    "URL",
                    ""
                ),
                "similarity": round(
                    similarity_scores[item_index] * 100,
                    2
                )
            })

            if len(recommendations) >= number:
                break

        return recommendations


# Create model
recommender = PerfumeRecommender()


# Allow "python model.py"
if __name__ == "__main__":

    print()
    print("=" * 50)
    print("PERFUME RECOMMENDATION MODEL")
    print("=" * 50)

    perfumes = recommender.get_all_perfumes()

    print(f"Available perfumes: {len(perfumes)}")

    if perfumes:

        test_perfume = perfumes[0]

        print()
        print(f"Testing with: {test_perfume}")

        recommendations = recommender.recommend(
            test_perfume,
            number=5
        )

        print()
        print("Recommendations:")

        for item in recommendations:

            print(
                f"- {item['name']} "
                f"({item['similarity']}% similar)"
            )

    print()
    print("Model test completed successfully.")