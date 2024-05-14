import GUI from "lil-gui";

export default class GUIController {
    constructor(config, changeConfiguration = () => {}) {
        this.config = config;
        this._changeConfiguration = changeConfiguration;
        this.gui = new GUI();
        this.init();
    }

    init() {
        this.gui
            .add(
                { backgroundStarsSpread: this.config.backgroundStarsSpread },
                "backgroundStarsSpread",
                0.999,
                1.003
            )
            .name("Spread of stars in Background")
            .onChange((v) => {
                this.config.backgroundStarsSpread = v;
                this._changeConfiguration(this.config);
            });

        this.gui
            .add(
                {
                    backgroundStarsVelocity:
                        this.config.backgroundStarsVelocity,
                },
                "backgroundStarsVelocity",
                0,
                100
            )
            .name("Velocity of stars in Background")
            .onChange((v) => {
                this.config.backgroundStarsVelocity = v;
                this._changeConfiguration(this.config);
            });

        this.gui
            .add({ lightHelper: this.config.lightHelper }, "lightHelper")
            .name("Light Helper")
            .onChange((v) => {
                this.config.lightHelper = v;
                this._changeConfiguration(this.config);
            });

        this.gui
            .addColor({ lightColor: this.config.lightColor }, "lightColor")
            .name("Light Color")
            .onChange((v) => {
                this.config.lightColor = v;
                this._changeConfiguration(this.config);
            });
    }
}