'use client'

import { useState } from 'react'

export default function Home() {
  const [mileage, setMileage] = useState(85000)

  const carSpecs = {
    model: 'Toyota Auris',
    year: 2014,
    engine: '1.8L Hybrid',
    power: '136 к.с.',
    transmission: 'CVT',
    fuelType: 'Бензин/Електро'
  }

  const maintenance = [
    {
      title: 'Заміна масла',
      dueKm: 90000,
      status: 'upcoming',
      description: `Залишилось ${90000 - mileage} км`
    },
    {
      title: 'Перевірка гібридної батареї',
      dueKm: 100000,
      status: 'ok',
      description: `Залишилось ${100000 - mileage} км`
    },
    {
      title: 'Заміна гальмівної рідини',
      dueKm: 88000,
      status: 'due',
      description: 'Потребує уваги!'
    },
    {
      title: 'Перевірка системи охолодження',
      dueKm: 92000,
      status: 'upcoming',
      description: `Залишилось ${92000 - mileage} км`
    }
  ]

  const tips = [
    'Використовуйте режим EV для економії палива в місті',
    'Плавне гальмування допомагає рекуперувати енергію',
    'Регулярно перевіряйте тиск у шинах (рекомендовано 2.2 bar)',
    'Уникайте агресивного прискорення для продовження терміну служби батареї',
    'Проводьте ТО у сертифікованих центрах для гібридних автомобілів'
  ]

  const fuelData = [
    { month: 'Січень', consumption: 5.2 },
    { month: 'Лютий', consumption: 5.5 },
    { month: 'Березень', consumption: 4.8 },
    { month: 'Квітень', consumption: 4.6 },
    { month: 'Травень', consumption: 4.9 },
    { month: 'Червень', consumption: 5.1 }
  ]

  const maxConsumption = Math.max(...fuelData.map(d => d.consumption))

  return (
    <div className="container">
      <div className="header">
        <h1>
          <span className="car-icon">🚗</span>
          {carSpecs.model} {carSpecs.year}
        </h1>
        <p>{carSpecs.engine} - Ваш надійний гібрид</p>
      </div>

      <div className="grid">
        <div className="card">
          <h2>📊 Характеристики</h2>
          <div className="stat">
            <span className="stat-label">Модель</span>
            <span className="stat-value">{carSpecs.model}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Рік випуску</span>
            <span className="stat-value">{carSpecs.year}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Двигун</span>
            <span className="stat-value">{carSpecs.engine}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Потужність</span>
            <span className="stat-value">{carSpecs.power}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Коробка передач</span>
            <span className="stat-value">{carSpecs.transmission}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Тип палива</span>
            <span className="stat-value">{carSpecs.fuelType}</span>
          </div>
        </div>

        <div className="card">
          <h2>🔧 Технічне обслуговування</h2>
          <ul className="maintenance-list">
            {maintenance.map((item, index) => (
              <li key={index} className={`maintenance-item ${item.status}`}>
                <div className="item-title">{item.title}</div>
                <div className="item-info">{item.description}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="card">
          <h2>📏 Пробіг</h2>
          <div className="stat">
            <span className="stat-label">Поточний пробіг</span>
            <span className="stat-value">{mileage.toLocaleString('uk-UA')} км</span>
          </div>
          <div className="stat">
            <span className="stat-label">Середній річний пробіг</span>
            <span className="stat-value">~12,000 км</span>
          </div>
          <div className="stat">
            <span className="stat-label">До наступного ТО</span>
            <span className="stat-value">{(90000 - mileage).toLocaleString('uk-UA')} км</span>
          </div>
          <button
            className="btn"
            onClick={() => setMileage(prev => prev + 100)}
          >
            Оновити пробіг (+100 км)
          </button>
        </div>
      </div>

      <div className="grid">
        <div className="card">
          <h2>⛽ Витрата палива (л/100км)</h2>
          <div className="fuel-chart">
            {fuelData.map((data, index) => (
              <div key={index} className="fuel-bar">
                <span className="fuel-month">{data.month}</span>
                <div className="fuel-bar-container">
                  <div
                    className="fuel-bar-fill"
                    style={{ width: `${(data.consumption / maxConsumption) * 100}%` }}
                  >
                    {data.consumption} л
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="stat" style={{ marginTop: '20px' }}>
            <span className="stat-label">Середня витрата</span>
            <span className="stat-value">
              {(fuelData.reduce((sum, d) => sum + d.consumption, 0) / fuelData.length).toFixed(1)} л/100км
            </span>
          </div>
        </div>

        <div className="card">
          <h2>💡 Поради по експлуатації</h2>
          <ul className="tips-list">
            {tips.map((tip, index) => (
              <li key={index} className="tip-item">{tip}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
