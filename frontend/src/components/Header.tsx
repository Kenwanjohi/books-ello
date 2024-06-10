import { Box, Typography, Button, IconButton } from "@mui/material";
import {
  Add as AddIcon,
  Book as BookIcon,
  ChevronLeft as ChevronLeftIcon,
} from "@mui/icons-material";
import { Book } from "../types";

interface HeaderProps {
  showReadingList: boolean;
  setShowReadingList: (show: boolean) => void;
  readingList: Book[];
}

const Header: React.FC<HeaderProps> = ({
  showReadingList,
  setShowReadingList,
  readingList,
}) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      flexWrap="wrap"
      mb={2}
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        backgroundColor: "white",
        padding: "1rem 0",
      }}
    >
      <Box display="flex" alignItems="start">
        {showReadingList && (
          <IconButton onClick={() => setShowReadingList(false)}>
            <ChevronLeftIcon />
          </IconButton>
        )}
        <Box>
          <Typography
            variant="h1"
            gutterBottom
            sx={{ fontSize: "1.6rem", fontWeight: "bold" }}
          >
            {showReadingList ? "Reading picks" : "Books"}
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{ fontSize: "1rem" }}
          >
            Manage your books here
          </Typography>
        </Box>
      </Box>
      <Button
        onClick={() => setShowReadingList(!showReadingList)}
        variant="contained"
        startIcon={showReadingList ? <AddIcon /> : <BookIcon />}
      >
        {showReadingList ? "Add Books" : "View Reading List"}{" "}
        {readingList.length > 0 && ` (${readingList.length})`}
      </Button>
    </Box>
  );
};
export default Header;
