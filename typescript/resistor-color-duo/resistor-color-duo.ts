export class ResistorColor {
  private colors: string[];

  private COLOR_MAP = [
    "Black",
    "Brown",
    "Red",
    "Orange",
    "Yellow",
    "Green",
    "Blue",
    "Violet",
    "Grey",
    "White",
  ];
  constructor(colors: string[]) {
    this.colors = colors;
    if (this.colors.length < 2)
      throw new Error("At least two colors need to be present");
  }
  value = (): number => {
    if (this.colors.length < 2)
      throw new Error("At least two colors need to be present");
    let result = "";
    const [color1, color2] = this.colors;
    result += this.getIndexofColor(color1);
    result += this.getIndexofColor(color2);
    return +result;
  };

  private readonly getIndexofColor = (color: string): string =>
    this.COLOR_MAP.map((item) => item.toLowerCase())
      .findIndex((item) => item === color.toLowerCase())
      .toString();
}
