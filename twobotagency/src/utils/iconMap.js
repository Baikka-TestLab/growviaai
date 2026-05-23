import {
  Phone, Calendar, Users, Star, CheckCircle, Mail,
  Search, Settings, Rocket,
  Activity, Sparkles, Scissors, Wrench, Zap, Wind,
  Home, Paintbrush, HardHat, Car, Hammer, ShoppingCart,
  TrendingUp, Boxes,
} from "lucide-react";

const iconMap = {
  Phone, Calendar, Users, Star, CheckCircle, Mail,
  Search, Settings, Rocket,
  Activity, Sparkles, Scissors, Wrench, Zap, Wind,
  Home, Paintbrush, HardHat, Car, Hammer, ShoppingCart,
  TrendingUp, Boxes,
};

export const getIcon = (name) => iconMap[name] ?? CheckCircle;
