module.exports = mongoose => {
    const Weather = mongoose.model(
        "currentWeather",
        mongoose.Schema(
            {
                dt: Number,
                sunrise: Number,
                sunset: Number,
                temp: Number,
                feels_like: Number,
                pressure: Number,
                humidity: Number,
                dew_point: Number,
                uvi: Number,
                clouds: Number,
                visibility: Number,
                wind_speed: Number,
                wind_deg: Number
            },
            { timestamps: true }
        )
    );

    return Weather;
};
