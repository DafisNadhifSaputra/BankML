# Bank Transaction Analysis - Machine Learning Project

![Project Banner](https://img.shields.io/badge/Machine%20Learning-Bank%20Analysis-blue.svg)
![Python](https://img.shields.io/badge/Python-3.8+-brightgreen.svg)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

## 🚀 Project Overview

This project presents a comprehensive machine learning analysis of bank transaction data, focusing on customer segmentation through clustering and predictive modeling through classification. The analysis covers 2,182 transaction records with 15 detailed features, providing insights into customer behavior patterns and potential fraud detection.

### 🎯 Key Objectives
- **Customer Segmentation**: Identify distinct customer groups based on transaction patterns
- **Predictive Modeling**: Build classification models to predict customer segments
- **Fraud Detection**: Analyze patterns that could indicate anomalous behavior
- **Business Intelligence**: Provide actionable insights for financial institutions

## 📊 Dataset Information

The dataset contains comprehensive bank transaction data with the following features:

| Feature | Description |
|---------|-------------|
| `TransactionID` | Unique identifier for each transaction |
| `AccountID` | Unique account identifier |
| `TransactionAmount` | Transaction value in currency |
| `TransactionDate` | Date and time of transaction |
| `TransactionType` | Credit or Debit transaction |
| `Location` | Geographic location (US cities) |
| `DeviceID` | Device used for transaction |
| `IP Address` | IPv4 address during transaction |
| `MerchantID` | Unique merchant identifier |
| `AccountBalance` | Account balance after transaction |
| `PreviousTransactionDate` | Last transaction date |
| `Channel` | Transaction channel (Online, ATM, Branch) |
| `CustomerAge` | Customer age |
| `CustomerOccupation` | Customer profession |
| `TransactionDuration` | Transaction duration in seconds |
| `LoginAttempts` | Number of login attempts |

## 🔧 Technical Implementation

### Technologies Used
- **Python 3.8+**
- **Pandas** - Data manipulation and analysis
- **NumPy** - Numerical computing
- **Scikit-learn** - Machine learning algorithms
- **Matplotlib & Seaborn** - Data visualization
- **Yellowbrick** - Machine learning visualization

### Machine Learning Pipeline

#### 1. Data Preprocessing
```python
# Feature scaling
scaler = MinMaxScaler()
numerical_features = ['TransactionAmount', 'AccountBalance', 'CustomerAge', 
                     'TransactionDuration', 'LoginAttempts']
df[numerical_features] = scaler.fit_transform(df[numerical_features])

# Label encoding
categorical_features = ['TransactionType', 'Location', 'Channel', 'CustomerOccupation']
encoders = {}
for col in categorical_features:
    le = LabelEncoder()
    df[col] = le.fit_transform(df[col])
    encoders[col] = le
```

#### 2. Clustering Analysis
- **Algorithm**: K-Means Clustering
- **Optimization**: Elbow Method for optimal cluster determination
- **Clusters Identified**: 4 distinct customer segments
- **Evaluation**: Silhouette Score analysis

#### 3. Classification Models
Multiple algorithms implemented and compared:

| Algorithm | Accuracy | Precision | Recall | F1-Score |
|-----------|----------|-----------|--------|----------|
| **Decision Tree** | **100.0%** | **1.000** | **1.000** | **1.000** |
| **Random Forest** | **100.0%** | **1.000** | **1.000** | **1.000** |
| **Support Vector Machine** | **100.0%** | **1.000** | **1.000** | **1.000** |
| K-Nearest Neighbors | 99.77% | 0.998 | 0.998 | 0.998 |

## 📈 Key Results

### Customer Segmentation
1. **Professional Doctors (Premium)** (25.4%): Highest transaction values, premium service preference
2. **Efficient Students (Growth)** (26.2%): Fast transactions, good financial management
3. **Digital Native (Tech-Savvy)** (23.9%): ATM-preferred, self-service oriented
4. **Mature Conservative (Stable)** (24.5%): Traditional banking, branch-focused

### Model Performance
- **Exceptional Results**: 3 models achieved perfect 100.0% accuracy
- **Consistent Performance**: All models show excellent prediction capability
- **Best Overall**: Decision Tree, Random Forest, and SVM with perfect scores

## 🌐 Live Demo

Visit the interactive website: [Bank Transaction Analysis](https://github.com/DafisNadhifSaputra/BankML)

### Website Features
- **Interactive Visualizations**: Dynamic charts showing clustering results
- **Model Comparison**: Side-by-side performance metrics
- **Responsive Design**: Mobile-friendly interface
- **Modern UI**: Clean, professional design with animations

## 📁 Project Structure

```
bank-transaction-analysis/
│
├── notebooks/
│   ├── [Clustering]_Submission_Akhir_BMLP_Dafis_Nadhif_Saputra.ipynb
│   └── [Klasifikasi]_Submission_Akhir_BMLP_Dafis_Nadhif_Saputra.ipynb
│
├── data/
│   ├── bank_transactions_data_edited.xlsx
│   ├── data_clustering.csv
│   └── data_clustering_inverse.csv
│
├── models/
│   ├── decision_tree_model.h5
│   ├── explore_RandomForest_classification.h5
│   ├── explore_SVM_classification.h5
│   ├── explore_KNN_classification.h5
│   ├── model_clustering.h5
│   ├── PCA_model_clustering.h5
│   └── tuning_classification.h5
│
├── index.html
├── styles.css
├── script.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites
```bash
pip install pandas numpy scikit-learn matplotlib seaborn yellowbrick joblib
```

### Running the Analysis
1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/bank-transaction-analysis.git
   cd bank-transaction-analysis
   ```

2. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Run the notebooks**
   - Open Jupyter Notebook or JupyterLab
   - Navigate to the notebooks folder
   - Run the clustering analysis first, then classification

4. **View the website**
   - Open `index.html` in your browser
   - Or deploy to GitHub Pages for live hosting

## 📊 Visualization Examples

### Clustering Visualization
- **Scatter plots** showing customer segments
- **Correlation matrices** for feature relationships
- **Distribution plots** for numerical features

### Classification Results
- **Performance comparison charts**
- **Confusion matrices** for each model
- **Feature importance plots**

## 🎯 Business Applications

### Financial Institutions
- **Customer Segmentation**: Targeted marketing campaigns
- **Risk Assessment**: Identify high-risk transaction patterns
- **Product Recommendations**: Personalized financial products

### Fraud Detection
- **Anomaly Detection**: Identify unusual transaction patterns
- **Real-time Monitoring**: Flag suspicious activities
- **Security Enhancement**: Improve authentication systems

## 🔮 Future Enhancements

- [ ] **Deep Learning Models**: Implement neural networks for improved accuracy
- [ ] **Real-time Processing**: Stream processing for live transaction analysis
- [ ] **Advanced Visualization**: 3D clustering plots and interactive dashboards
- [ ] **API Development**: REST API for model predictions
- [ ] **Docker Deployment**: Containerized application deployment

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Dafis Nadhif Saputra**
- GitHub: [@dafisnadhif](https://github.com/dafisnadhif)
- LinkedIn: [Dafis Nadhif Saputra](https://linkedin.com/in/dafisnadhif)
- Email: dafis.nadhif@email.com

## 🙏 Acknowledgments

- **BMLP Program**: For providing the learning framework
- **Dataset Source**: Bank transaction data for educational purposes
- **Open Source Community**: For the amazing libraries and tools

## 📈 Performance Metrics

```
Model Performance Summary:
├── Decision Tree: 100.0% accuracy (Perfect)
├── Random Forest: 100.0% accuracy (Perfect)
├── SVM: 100.0% accuracy (Perfect)
└── KNN: 99.77% accuracy (Excellent)

Clustering Results:
├── Total Data: 2,182 transactions
├── Optimal Clusters: 4
├── Distribution: 23.9% - 26.2% (balanced)
└── Segments: Professional, Student, Digital, Conservative
```

---

⭐ **Star this repository if you found it helpful!**

📧 **Questions or suggestions? Feel free to open an issue or contact me directly.**
