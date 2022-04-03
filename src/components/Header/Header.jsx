import classes from "@/src/components/Header/Header.module.css";

export const Header = () => {
  return (
    <header className={classes.header}>
      <h1 className={classes.title}>都道府県ごとの人口構成</h1>
    </header>
  );
};
