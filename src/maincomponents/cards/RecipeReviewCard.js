import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Stack } from '@mui/material';
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Stack spacing={1} direction="row" justifyContent="center">
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QA6RXhpZgAASUkqAAgAAAACAJiCAgAMAAAAJgAAABIBAwABAAAAAQAAAAAAAABMYXJyeSBTaGVyZXL/7QBYUGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAADwcAlAAFUhpZ2hJbXBhY3RQaG90b2dyYXBoeRwCdAAMTGFycnkgU2hlcmVyHAJuAAxHZXR0eSBJbWFnZXP/4QS+aHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIj4KCTxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CgkJPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczpJcHRjNHhtcENvcmU9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBDb3JlLzEuMC94bWxucy8iICAgeG1sbnM6R2V0dHlJbWFnZXNHSUZUPSJodHRwOi8veG1wLmdldHR5aW1hZ2VzLmNvbS9naWZ0LzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGx1cz0iaHR0cDovL25zLnVzZXBsdXMub3JnL2xkZi94bXAvMS4wLyIgIHhtbG5zOmlwdGNFeHQ9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBFeHQvMjAwOC0wMi0yOS8iIHhtbG5zOnhtcFJpZ2h0cz0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3JpZ2h0cy8iIGRjOlJpZ2h0cz0iTGFycnkgU2hlcmVyIiBwaG90b3Nob3A6Q3JlZGl0PSJHZXR0eSBJbWFnZXMiIEdldHR5SW1hZ2VzR0lGVDpBc3NldElEPSI5MTY1ODE1NyIgeG1wUmlnaHRzOldlYlN0YXRlbWVudD0iaHR0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"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </Stack>
  );
}