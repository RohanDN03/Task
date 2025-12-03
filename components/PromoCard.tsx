import {
  Card,
  CardContent,
  CardTitle
} from "@/components/ui/card";

type Promo = {
  id: number;
  title: string;
  subtitle: string;
  days: string;
  priceFrom: string;
  date?: string;
  image: string;
};

export default function PromoCard({ p }: { p: Promo }) {
  return (
    <Card className="overflow-hidden">
      <div className="h-44 relative">
        <img src={p.image} alt={p.title} className="w-full h-44 object-cover" />
      </div>

      <CardContent className="p-4">
        <p className="text-xs text-gray-500">{p.subtitle}</p>
        <CardTitle className="text-base font-semibold mt-2">{p.title}</CardTitle>

        <div className="mt-3 flex items-center justify-between text-sm text-gray-600">
          <span>{p.days}</span>
          <span className="font-bold">{p.priceFrom}</span>
        </div>

        <div className="mt-4">
          <a className="text-sm text-violet-700 underline" href="#">
            View tour
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
