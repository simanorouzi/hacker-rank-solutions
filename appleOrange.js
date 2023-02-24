export default function (
  start,
  end,
  appleTreePoint,
  orangeTreePoint,
  apples,
  oranges
) {
  apples = apples.map((apple) => apple + appleTreePoint);
  oranges = oranges.map((orange) => orange + orangeTreePoint);
  const countAppleOnRedLight = apples.filter(
    (item) => start <= item && item <= end
  ).length;
  const countOrangeOnRedLight = oranges.filter(
    (item) => start <= item && item <= end
  ).length;

  console.log('Apples Point in Red Light is',countAppleOnRedLight,'And Oranges Point is', countOrangeOnRedLight) ;
}
