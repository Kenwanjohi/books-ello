import {
  ListItem,
  ListItemText,
  Button,
  Box,
  Typography,
  darken,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";
import theme from "../theme";
import { Book } from "../types";

interface BookListItemProps {
  title: string;
  author: string;
  readingLevel: string;
  coverPhotoURL: string;
  onReadingListPage?: boolean;
  addToReadingList?: (book: Book) => void;
  removeFromReadingList?: (title: string) => void;
  isBookInReadingList?: (title: string) => boolean;
}

const BookListItem: React.FC<BookListItemProps> = ({
  title,
  author,
  readingLevel,
  coverPhotoURL,
  onReadingListPage = false,
  addToReadingList,
  removeFromReadingList,
  isBookInReadingList,
}) => {
  const imageSrc = new URL(`../${coverPhotoURL}`, import.meta.url).toString();

  const handleAddToReadingList = () => {
    addToReadingList?.({ title, author, readingLevel, coverPhotoURL });
  };

  const handleRemoveFromReadingList = () => {
    removeFromReadingList?.(title);
  };

  return (
    <ListItem
      sx={{
        py: 2,
        mb: 1,
        borderRadius: 4,
        backgroundColor: "#fafafa",
      }}
    >
      <Box
        mr={2}
        borderRadius={2}
        width={100}
        height={100}
        flexShrink={0}
        overflow="hidden"
      >
        <img src={imageSrc} alt={title} style={{ width: "100%" }} />
      </Box>
      <Box display="flex" flexDirection="column" alignItems="flex-start">
        <ListItemText
          sx={{ marginBottom: 1 }}
          primary={
            <>
              {title}{" "}
              <Typography
                component="span"
                fontWeight="bold"
                sx={{
                  backgroundColor: theme.palette.turquoiseLight.main,
                  padding: "0 4px",
                  borderRadius: "4px",
                }}
              >
                {readingLevel}
              </Typography>
            </>
          }
          secondary={`by ${author} `}
        />
        {onReadingListPage ? (
          <Button
            onClick={handleRemoveFromReadingList}
            variant="contained"
            color="primary"
            size="small"
            sx={{
              backgroundColor: theme.palette.orangeRed.main,
              "&:hover": {
                backgroundColor: darken(theme.palette.orangeRed.main, 0.2),
              },
            }}
          >
            Remove
          </Button>
        ) : (
          <Button
            sx={{
              backgroundColor: theme.palette.primary.main,
            }}
            onClick={handleAddToReadingList}
            startIcon={
              isBookInReadingList?.(title) ? <CheckIcon /> : <AddIcon />
            }
            variant="contained"
            color="primary"
            size="small"
            disabled={isBookInReadingList?.(title)}
          >
            {isBookInReadingList?.(title) ? "Added" : "Reading List"}
          </Button>
        )}
      </Box>
    </ListItem>
  );
};

export default BookListItem;
