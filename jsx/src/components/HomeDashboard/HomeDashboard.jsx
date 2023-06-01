import React from "react";
import "./home-dashboard.css";

const HomeDashboard = (props) => {
  let base_url = window.base_url || "/";
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>My TEst</h1>
          <p>Quick access to most used services and actions</p>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <div className="card">
            <h3>Servers</h3>
            <p>Servers are how you run data expirements</p>
            <button className="btn primary-btn">Add New Server</button>
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <h3>Dashboards</h3>
            <p>Dashboards are for displaying data science models</p>
            <button className="btn primary-btn">Add New Dashboard</button>
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <h3>Data</h3>
            <p>Connect to your data sources or upload data</p>
            <button className="btn primary-btn">Add Data</button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Services</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <div className="card card-sm">
            <h3>Airflow</h3>
            <p>Automate Data Ingestion</p>
            <button className="btn primary-btn">Add</button>
          </div>
        </div>
        <div className="col-4">
          <div className="card card-sm">
            <h3>MLflow</h3>
            <p>Track your models</p>
            <button className="btn primary-btn">Add</button>
          </div>
        </div>
        <div className="col-4">
          <div className="card card-sm">
            <h3>Label Studio</h3>
            <p>Train your models</p>
            <button className="btn primary-btn">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDashboard;
