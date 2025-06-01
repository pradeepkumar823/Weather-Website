import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
export default function InfoBox({info}){


    // const INIT_URL=
    // "https://plus.unsplash.com/premium_photo-1714923303591-3b262dd1864f?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3"
   
    const HOT_URL="https://media.istockphoto.com/id/1332108668/photo/heatwave-with-warm-thermometer-and-fire-global-warming-and-extreme-climate-environment.jpg?s=1024x1024&w=is&k=20&c=QhEOtUgcu5E94FWjghUGyMZMUSF3DckCOvL7OqfgAVE=";
    const COLD_URL="https://images.unsplash.com/photo-1639351729089-c9962d33d5d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const RAIN_URL="https://media.istockphoto.com/id/498063665/photo/rainy-landscape.jpg?s=1024x1024&w=is&k=20&c=JmmkAKBNVz2QC2YaXGl8lLvYQYrn6SYXt_FPtN-8JUc=";

    
    return (
        <div className="InfoBox">
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
    
            <CardMedia
                component="img"
                height="140"
                image={
                info.humidity >80
                ? RAIN_URL
                :(info.temp> 15)
                ?HOT_URL
                :COLD_URL
              
              }
                alt="green iguana"
        />
        
        <CardContent>
            <Typography
                gutterBottom variant="h5"
                component="div">
            {info.city}{
              info.humidity >80
              ? <ThunderstormIcon/>
              :(info.temp> 15)
              ?<SunnyIcon/>
              :<AcUnitIcon/>
            }
            
            </Typography>
            <Typography
            variant="body2"
            sx={{ color: 'text.secondary' }}component={"span"}>
            

            
            <p>Temperature={info.temp}&deg;C</p>
            <p>Humidity={info.temp}</p>
            <p>Min Temp={info.tempMin}</p>
            <p>Max Temp={info.tempMax}</p>
            <p>The Weather can be described as <i>{info.weather} </i>and feels like={info.temp}&deg;C</p>

            </Typography>
        </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
    </div>
            </div>
    );
}