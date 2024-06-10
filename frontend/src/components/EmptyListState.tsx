import { useTheme } from "@mui/material/styles";
import { Typography, Button, Box } from "@mui/material";
import {
  Add as AddIcon,
  CollectionsBookmark as CollectionsBookmarkIcon,
} from "@mui/icons-material";

interface EmptyStateProps {
  onAddBook: () => void;
}

const EmptyListState: React.FC<EmptyStateProps> = ({ onAddBook }) => {
  const theme = useTheme();
  return (
    <Box textAlign="center" mt={8}>
      <CollectionsBookmarkIcon
        style={{ fontSize: 80, color: theme.palette.steeleBlue.main }}
      />
      <Typography variant="h5" gutterBottom>
        No books yet
      </Typography>
      <Typography variant="body1" gutterBottom>
        Your reading list is empty. Add some books to get started!
      </Typography>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={onAddBook}
      >
        Add Books
      </Button>
    </Box>
  );
};

export default EmptyListState;
