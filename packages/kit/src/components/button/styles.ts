import useTheme from "../../hooks/use-theme";

const styles = () => {
  const theme = useTheme();

  return {
    button: {
      color: theme.color.accent.text,
      backgroundColor: theme.color.accent.bg,
    },
  };
};

export default styles;
